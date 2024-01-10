import { useEffect, useState } from "react";
import api from "@/utils/api";

export default function TreasureCard({ id }) {
  const [percent, setPercent] = useState(null);

  const treasure_id = Number(id);

  const user_id =
    typeof localStorage !== "undefined" && localStorage.getItem("user_id");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user_id);

    api.getUserTreasureCollection(user_id).then((res) => {
      let userTreasure = [...res.treasures, treasure_id];
      console.log(userTreasure);
      api.patchProfileTreasure(user_id, userTreasure).then((res) => {
        console.log(res.treasures);
        console.log(userTreasure);
        const identicalArr = userTreasure.every(
          (element, index) => element === res.treasures[index]
        );
        if (identicalArr) {
          api.IncrementTreasureCollectedBy(treasure_id).then((res) => {
            console.log(res);
          });
        }
      });
    });
  };

  const treasureRarity = () => {
    return api.getTreasureById(treasure_id).then((res) => {
      return res.collected_by;
    });
  };

  const totalUsers = () => {
    return api.fetchData().then((res) => {
      return res.length;
    });
  };

  const calcPercentageFound = (treasure_id) => {
    Promise.all([treasureRarity(treasure_id), totalUsers()]).then(
      ([collected_by, total_users]) => {
        const percentageFound = Math.floor((collected_by / total_users) * 100);
        setPercent(percentageFound);
      }
    );
  };

  useEffect(() => {
    calcPercentageFound(treasure_id);
  }, [treasure_id]);

  return (
    <>
      <button
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        type="submit"
        onClick={handleSubmit}
      >
        Collect Treasure
      </button>
      <h1>Only {percent}% of pirates have found this treasure!</h1>
    </>
  );
}

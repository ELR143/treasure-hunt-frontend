import { useEffect, useState } from "react";
import api from "@/utils/api";
import { useRouter } from "next/navigation";

export default function TreasureCard({ id }) {
  const [percent, setPercent] = useState(null);
  const router = useRouter()

  const treasure_id = Number(id);

  const user_id =
    typeof localStorage !== "undefined" && localStorage.getItem("user_id");

  const handleSubmit = (e) => {
    e.preventDefault();

    api.getUserTreasureCollection(user_id).then((res) => {
      let userTreasure = [...res.treasures, treasure_id];
      api.patchProfileTreasure(user_id, userTreasure).then((res) => {
        const identicalArr = userTreasure.every(
          (element, index) => element === res.treasures[index]
        );
        if (identicalArr) {
          return api.IncrementTreasureCollectedBy(treasure_id)
        }
      }).then(()=>{
        router.push("/collection")
      }).catch((err)=>{
        console.log(err);
      })
    });
  };

  const fetchTreasure = () => {
    return api.getTreasureById(treasure_id).then((res) => {
      return res;
    });
  };

  const totalUsers = () => {
    return api.fetchData().then((res) => {
      return res.length;
    });
  };

  const calcPercentageFound = (treasure_id) => {
    Promise.all([fetchTreasure(treasure_id), totalUsers()]).then(
      ([treasure, total_users]) => {
        const percentageFound = Math.floor((treasure.collected_by / total_users) * 100);
        setPercent(Math.floor((treasure.collected_by / total_users) * 100));
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
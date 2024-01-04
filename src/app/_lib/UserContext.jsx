'use client'

import { useCallback, createContext } from "react";

const { RxAvatar } = require("react-icons/rx");

const userContext = createContext({username: 'default_user', avatar: <RxAvatar />})

export default userContext;
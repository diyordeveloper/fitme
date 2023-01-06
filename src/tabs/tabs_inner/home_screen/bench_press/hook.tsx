import { useRoute } from "@react-navigation/native";
import React from "react";

export const BenchHooks = () => {
    const route = useRoute();
    const exercise = route.params



    return { exercise }
}
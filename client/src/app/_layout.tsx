import { useEffect } from "react";
import { useState } from "react";
import { Stack } from "expo-router";

export default function RootLayout(){
  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown : false}}/>
    </Stack>
  )
}
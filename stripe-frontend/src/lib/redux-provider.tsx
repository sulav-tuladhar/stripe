"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import NavComponent from "@/components/common/nav/nav.component";

export function Providers({ children }: { children: any }) {
    return <Provider store={store}>
        <NavComponent />
        {children}
    </Provider>;
}
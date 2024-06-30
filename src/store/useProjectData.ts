import axios from "axios";
import { create } from "zustand";
import { useProjectDateInterface } from "../types/types";

const initialState: useProjectDateInterface = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

export const useProjectData = create((set) => ({
    ...initialState,
    // call api
    execute: async () => {
        set({ ...initialState, loading: true });
        try {
            const res = await axios.get("http://localhost:3000/projects");
            set({ ...initialState, success: true, data: res.data });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error("Error in data fetch:", err);
            set({ ...initialState, error: true, errorData: err.message });
        }
    },
}));
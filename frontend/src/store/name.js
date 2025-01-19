import { create } from "zustand";

export const useNameStore = create((set) => ({
    names: [],
    setNames: (names) => set({ names }),

    createName: async (newName) => {
        if (!newName.firstname.trim() || !newName.lastname.trim()) {
            return { success: false, message: "Please fill in all fields." };
        }

        try {
            const res = await fetch("/api/listofnames", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newName),
            });

            if (!res.ok) {
                throw new Error("Failed to add name.");
            }

            const data = await res.json();
            set((state) => ({ names: [...state.names, data.data] }));
            return { success: true, message: "Name added successfully!" };
        } catch (error) {
            console.error("Error:", error);
            return { success: false, message: error.message };
        }
    },

    searchName: async (firstname, lastname) => {
        if (!firstname.trim() || !lastname.trim()) {
            return { success: false, message: "Please provide both first and last names." };
        }
    
        try {
            const res = await fetch(`/api/listofnames?firstname=${firstname}&lastname=${lastname}`, {
                method: "GET",
            });
    
            if (!res.ok) {
                if (res.status === 404) {
                    throw new Error("Name not found.");
                }
                throw new Error("Failed to fetch name.");
            }
    
            const data = await res.json();
            return { success: true, data: data.data };
        } catch (error) {
            console.error("Error in searchName:", error);
            return { success: false, message: error.message };
        }
    },
}));

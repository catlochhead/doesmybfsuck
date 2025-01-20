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

    searchName: async (searchCriteria) => {
        const trimmedFirstname = searchCriteria.firstname.trim();
        const trimmedLastname = searchCriteria.lastname.trim();
    
        if (!trimmedFirstname || !trimmedLastname) {
            return { success: false, message: "Please provide both first and last names." };
        }
    
        try {
            const res = await fetch(`/api/listofnames/search`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname: trimmedFirstname,
                    lastname: trimmedLastname,
                }),
            });
    
            if (!res.ok) {
                throw new Error("Failed to search for the name.");
            }
    
            const data = await res.json();
            if (data.success) {
                return { success: true, message: `${trimmedFirstname} ${trimmedLastname} does suck!` };
            } else {
                return { success: false, message: `${trimmedFirstname} ${trimmedLastname} doesn't suck.` };
            }
        } catch (error) {
            console.error("Error searching name:", error);
            return { success: false, message: "An error occurred while searching for the name." };
        }
    },
}));

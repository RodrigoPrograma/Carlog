
import { Vehicle } from "../types/vehicles";
const API_URL = import.meta.env.VITE_API_URL +'/vehicles' || "http://localhost:3000/api/vehicles";

export const getVehicles = async (): Promise<Vehicle[]> => {
    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error("Error de conexión con el servidor");
    }
    return response.json()
};
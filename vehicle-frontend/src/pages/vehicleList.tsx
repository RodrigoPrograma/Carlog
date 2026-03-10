import { useEffect, useState } from "react";
import { Vehicle } from "../types/vehicles";
import { getVehicles } from "../services/vehicleService";

function VehicleList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      } finally {
        setLoading(false);
        const data = await getVehicles();
        console.log("API response:", data);
        setVehicles(data);
      }
    };
    fetchVehicles();
  }, []);
  if (loading) {
    return <p>Cargando Vehiculos</p>;
  }

  return (
    <div>
      <h2>Vehiculos</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.marca} {vehicle.modelo} ({vehicle.versiones[0]?.anio})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleList;

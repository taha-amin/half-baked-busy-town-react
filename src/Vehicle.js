export default function Vehicle({ vehicle }) {
  return <div className="vehicle">
    
    {/* the vehicle component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {vehicle.vehicle === 'car' && '🚗'}

    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {vehicle.vehicle === 'truck' && '🚚'}

    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {vehicle.vehicle === 'bus' && '🚌'}

    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    {vehicle.vehicle === 'motorcycle' && '🏍️'}
  </div>;
}
import { parseCapacityToArray } from "./parsers";

//Filtra de todas las cabanas aquellas que incluyan la capacidad requerida
export function filterRoomsByCapacity(rooms, requestCapacity) {
    const results = [];
    for (let i = 0; i < rooms.length; i++) {
        const roomCapacity = parseCapacityToArray(rooms[i].capacity);
        if (roomCapacity.includes(requestCapacity)) {
            results.push(rooms[i]);
        }
    }
    return results;
}

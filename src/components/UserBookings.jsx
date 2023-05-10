import React, { useEffect, useState } from "react";

export default function UserBookings({ session }) {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const getUserBookings = async () => {
            if (session === undefined || session === null) {
                return;
            }
            const response = await fetch(
                `/api/profile/${session.user.id}/bookings`
            );
            const data = await response.json();
            setBookings(data);
            console.log(data);
        };
        getUserBookings();
    }, [session]);

    return (
        <div>
            {bookings.length === 0 ? (
                <h1>Usted no tiene reservas</h1>
            ) : (
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th>Room</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Adults</th>
                            <th>Children</th>
                            <th>Created at</th>
                            <th>Payment</th>
                            <th>Suspended</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((el) => {
                            return (
                                <tr>
                                    <td>{el.rooms.name}</td>
                                    <td>{el.checkin}</td>
                                    <td>{el.checkout}</td>
                                    <td>{el.adults}</td>
                                    <td>{el.children}</td>
                                    <td>{el.created_at}</td>
                                    <td>{el.payments ? "✅" : "❌"}</td>
                                    <td>{el.suspended ? "✅" : "❌"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

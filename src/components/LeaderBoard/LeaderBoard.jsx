import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import './LeaderBoard.css';

const LeaderBoard = ({ game }) => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData(game);
	}, [game]);

	const getData = async (gameId) => {
		setLoading(true);
		try {
			setErr(false);

			const token = document.cookie.match(new RegExp('(^| )token=([^;]+)'))[2];

			const res = await axios.get(`https://rotaractmora.org/awurudu-backend/api/game/${gameId}/leaderboard`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			setData(res.data.data);
		} catch (err) {
			console.log(err);
			setErr(true);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<h1 className='text-center text-3xl mb-4'>Leaderboard</h1>
			{
				loading ? (
					<Loader />
				) : (
					err ? (
						<div className='text-gray-500 text-center'>
							Error while loading data. Please try again.
						</div>
					) : (
						data.length > 0 ? (
							<div className='max-w-7xl mx-auto py-6 md:px-40 sm:px-10 flex justify-center'>
								<table className="table-fixed w-full">
									<thead>
										<tr className='bg-yellow-100'>
											<th className="w-1/6 border border-yellow-500 px-4 py-2 text-yellow-600 font-medium"></th>
											<th className="w-1/2 border border-yellow-500 px-4 py-2 text-yellow-600 font-medium">Player</th>
											<th className="w-1/2 border border-yellow-500 px-4 py-2 text-yellow-600 font-medium">Score</th>
										</tr>
									</thead>
									<tbody>
										{
											data.map((player, index) => (
												<tr key={player._id} className={index % 2 == 0 ? 'bg-yellow-50' : 'bg-yellow-100'}>
													<td className='py-2 md:px-8 sm:px-4 text-center border border-yellow-500 px-4 py-2 font-medium'>#{index + 1}</td>
													<td className='py-2 px-8 text-center border border-yellow-500 px-4 py-2 font-medium'>{player.name} (<span className='text-gray-500 text-sm'>{player.house}</span>)</td>
													<td className='py-2 px-8 text-center border border-yellow-500 px-4 py-2 font-medium'>{typeof player[game] === 'object' ? player[game].score.toFixed(3) : (game === 'GamaHarahaDiwima' ? player[game] : player[game].toFixed(3))}</td>
												</tr>
											))
										}

									</tbody>
								</table>
							</div>
						) : (
							<div className='text-gray-500 text-center'>
								No user played this game yet. Be the first to appear in this leaderboard.
							</div>
						)
					)
				)
			}

		</>
	);
}

export default LeaderBoard;
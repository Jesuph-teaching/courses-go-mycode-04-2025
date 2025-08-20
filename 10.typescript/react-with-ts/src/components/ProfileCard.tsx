type Props = {
	firstName: string;
	lastName: string;
	age: number;
};

export default function ProfileCard({ lastName, age, firstName }: Props) {
	return (
		<div className="card  lg:card-side bg-base-100 shadow-sm">
			<figure className="w-full h-40 lg:w-30 lg:h-full">
				<img
					src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
					alt="Album"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{firstName} {lastName}
				</h2>
				<p>{age} years old</p>
				<div className="card-actions justify-end">
					<button
						className="btn btn-primary"
						onClick={() => {
							const modal = document.getElementById(
								'my_modal_3'
							) as HTMLDialogElement | null;
							if (modal) {
								modal.showModal();
							}
						}}
					>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

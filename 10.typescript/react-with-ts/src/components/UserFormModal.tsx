import { useState } from 'react';
import type { BaseUserI, UserI } from '../types/user';

type Props = {
	onCreateUser: (user: UserI) => void;
};
/* 
<button className="btn"
   
    > open modal </button> 
*/
export default function UserFormModal({ onCreateUser }: Props) {
	const [user, setUser] = useState<BaseUserI>({
		firstName: '',
		lastName: '',
		age: 18,
	});
	return (
		<dialog id="my_modal_3" className="modal">
			<div className="modal-box">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<h3 className="font-bold text-lg">Enter new User data!</h3>
				<form
					onReset={() => {
						setUser({
							firstName: '',
							lastName: '',
							age: 18,
						});
					}}
					onSubmit={(e) => {
						e.preventDefault();
						onCreateUser({
							...user,
							id: Date.now().toString(),
						});
						const modal = document.getElementById(
							'my_modal_3'
						) as HTMLDialogElement | null;
						if (modal) {
							modal.close();
						}
						setUser({
							firstName: '',
							lastName: '',
							age: 18,
						});
					}}
					className="flex flex-col gap-2"
				>
					<fieldset className="fieldset w-full">
						<legend className="fieldset-legend">First name:</legend>
						<input
							type="text"
							className="input w-full"
							placeholder="Youcef"
							value={user.firstName}
							onChange={(e) => {
								setUser((p) => ({ ...p, firstName: e.target.value }));
							}}
						/>
					</fieldset>
					<fieldset className="fieldset w-full">
						<legend className="fieldset-legend">Last name:</legend>
						<input
							type="text"
							className="input w-full"
							placeholder="Madadi"
							value={user.lastName}
							onChange={(e) => {
								setUser((p) => ({ ...p, lastName: e.target.value }));
							}}
						/>
					</fieldset>
					<fieldset className="fieldset w-full">
						<legend className="fieldset-legend">Age:</legend>
						<input
							type="number"
							className="input w-full"
							placeholder="18"
							value={user.age}
							onChange={(e) => {
								setUser((p) => ({ ...p, age: Number(e.target.value) }));
							}}
						/>
					</fieldset>
					<button type="submit" className="btn btn-primary w-full">
						Add user
					</button>
					<button type="reset" className="btn btn-error w-full">
						Reset
					</button>
				</form>
			</div>
		</dialog>
	);
}

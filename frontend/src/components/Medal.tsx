import { useRouter } from 'next/router';
import { useState } from 'react';

type IMedalProperties = {
	initialValue?: boolean;
	title?: string;
	body?: string;
};

const delQuery = (asPath: string) => {
	return asPath.split('?')[0];
};

const Modal = (properties: IMedalProperties) => {
	const router = useRouter();

	const [showModal, setShowModal] = useState<boolean>(
		properties.initialValue === undefined ? true : properties.initialValue,
	);
	return (
		<>
			{properties.initialValue === false ? (
				<button
					className="mb-1 mr-1 rounded bg-pink-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
					type="button"
					onClick={() => setShowModal(true)}
					data-testid="medal-button1"
				>
					Open regular modal
				</button>
			) : undefined}
			{showModal ? (
				<>
					<div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
						<div className="relative mx-auto my-6 w-auto max-w-3xl">
							{/* content */}
							<div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
								{/* header */}
								<div className="border-slate-200 flex items-start justify-between rounded-t border-b border-solid p-5">
									<h3
										className="text-3xl font-semibold"
										id="medal-title"
										data-testid="medal-title"
										aria-label="medal-title"
										role="heading"
									>
										{properties.title}
									</h3>
									<button
										className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
										data-testid="medal-button2"
									>
										<span className="block size-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/* body */}
								<div className="relative flex-auto p-6">
									<p
										className="text-slate-500 my-4 text-lg leading-relaxed"
										id="medal-body"
										data-testid="medal-body"
										aria-label="medal-body"
										role="dialog"
									>
										{properties.body}
									</p>
								</div>
								{/* footer */}
								<div className="border-slate-200 flex items-center justify-end rounded-b border-t border-solid p-6">
									<button
										className="mb-1 mr-1 rounded bg-red-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
										type="button"
										data-testid="medal-button3"
										id="medalDismiss"
										onClick={() => {
											setShowModal(false);
											router.push(`${delQuery(router.asPath)}`);
										}}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="fixed inset-0 z-40 bg-black opacity-25"></div>
				</>
			) : undefined}
		</>
	);
};

export default Modal;

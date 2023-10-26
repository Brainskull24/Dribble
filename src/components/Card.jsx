const Card = ({
	emoji = "&#128513;",
	title = "Where is title?",
	description = `Lorem ipsum dolor, sit amet consectetur 
            adipi elit. Impedit beatae deserunt 
            aperiam mollitia maiores.`,
	bgColor = "lightcyan",
}) => {
	const emoji_html = { __html: emoji };
	return (
		<div
			className=" h-[200px] w-[275px] min-w-[275px] p-5 flex flex-col items-start gap-3 rounded-[16px] transition-all hover:transform hover:-rotate-6 "
			style={{ backgroundColor: bgColor }}
		>
			<p
				className=" w-full text-3xl pb-3"
				dangerouslySetInnerHTML={emoji_html}
			></p>
			<p className=" w-full text-base font-semibold">{title}</p>
			<p className=" w-full text-xs font-light text-justify">{description}</p>
		</div>
	);
};

export default Card;

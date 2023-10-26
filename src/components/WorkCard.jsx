const WorkCard = ({
	title = "Power through, even when the going gets tough",
	desc = `we help you spot and work around whatever stands in the way, be it bad habits, fears, etc.`,
}) => {
	return (
		<div className="h-[160px] bg-white w-72 py-6 px-8 flex flex-col items-start gap-3 rounded-[16px] shadow">
			<p className=" w-full text-sm font-semibold">{title}</p>
			<p className=" w-full text-xs font-light text-justify">{desc}</p>
		</div>
	);
};

export default WorkCard;



const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-6/12  my-4">
            <p className="text-orange-600 mb-2 font-bold">_____________{subHeading}____________</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
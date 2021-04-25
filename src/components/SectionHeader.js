;

const SectionHeader = ({color, children}) => {
    return (
        <h2 className={`text-${color ? color : 'gray-800'} section-header text-4xl  text-center font-bold`}>{children}</h2>
    )
}

export default SectionHeader;
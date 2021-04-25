
import Icon from '@components/Icon'
import Label from '@components/Label'


/* just an image and a label in vertical alignment */
const LabelledBlock = ({image, label}) => {
    console.log("lb block image ", image);
    return (
        <div className="sm:w-60 mx-2 flex flex-col items-center">

        <div className="relative overflow-hidden rounded-full w-20 h-20">
            <Icon 
                src={image} 
                alt={label} 
            />
        </div>
          
            <span className="mt-4 text-center">
                <Label>{label}</Label>
            </span>
            
        </div>
    )
}

/* image + title and descrition in  horizontal alignment */
const DescriptiveBlock = ({image, label, children}) => {
    console.log("ds block image ", image);

    return (
    <div className="my-6 sm:my-4 flex flex-col sm:flex-row justify-around items-center">

        <div className="relative overflow-hidden rounded-full w-24 h-24">
            <Icon 
                src={image} 
                alt="label" 
                variant="circle"
                size="medium"   
                />
        </div>

        <div className="ml-4 my-2 text-center sm:w-3/4 sm:text-left">
            <Label>{label}</Label>
            <p className="serif">{children}</p>
        </div>
        
        
    </div>
    )
}

export {
    LabelledBlock,
    DescriptiveBlock
} 
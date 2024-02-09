interface Props {
    heading: string;
    paragraph: string;
}

const HeadingParagraphyBase = ({heading, paragraph}: Props) => {
  return (
    <div className="my-4 font-body">
        <h2 className="text-xl font-semibold text-lerndis-black">{heading}</h2>
        <p className="text-sm font-normal text-lerndis-grey-600">{paragraph}</p>
    </div>
  )
}

export default HeadingParagraphyBase;
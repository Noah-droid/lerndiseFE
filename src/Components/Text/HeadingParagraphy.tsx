interface Props {
    heading: string;
    paragraph: string;
}

const HeadingParagraphy = ({heading, paragraph}: Props) => {
  return (
    <div className="mt-[32px] mb-[24px] font-body">
        <h2 className="text-xl font-semibold text-lerndis-black">{heading}</h2>
        <p className="text-sm font-normal text-lerndis-grey-600">{paragraph}</p>
    </div>
  )
}

export default HeadingParagraphy
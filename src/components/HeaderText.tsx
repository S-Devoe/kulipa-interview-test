interface Props {
  header: string;
  paragraph: string;
}

const HeaderTexts = ({ header, paragraph }: Props) => {
  return (
    <div className="mb-[2rem]">
      <h2 className="text-blackGray font-medium text-[1.75rem] font-kanit ">{header}</h2>
      <p className="text-[1.25rem] text-myGrey font-normal ">{paragraph}</p>
    </div>
  );
};
export default HeaderTexts;

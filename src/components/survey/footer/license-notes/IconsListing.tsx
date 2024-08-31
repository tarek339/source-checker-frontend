interface IIconsListing {
  children: JSX.Element[] | JSX.Element | undefined;
}

const IconsListing = ({ children }: IIconsListing) => {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <th className="th">Icon: visualized</th>
          <th className="th">Icon: name</th>
          <th className="th">Offered by</th>
          <th className="th">Website</th>
          <th className="th">Copyright notice</th>
          <th className="th">Link License (text)</th>
        </tr>
      </thead>
      <tbody className="tbody">{children}</tbody>
    </table>
  );
};

export default IconsListing;

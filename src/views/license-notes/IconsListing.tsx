interface IIconsListing {
  children: JSX.Element[] | JSX.Element | undefined;
}

const IconsListing = ({ children }: IIconsListing) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Icon: visualized</th>
          <th>Icon: name</th>
          <th>Offered by</th>
          <th>Website</th>
          <th>Copyright notice</th>
          <th>Link License (text)</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default IconsListing;

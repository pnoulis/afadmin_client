import * as React from "react";
import styled from "styled-components";

function CardPackage({ pkg, className, ...props }) {
  return (
    <StyleCardPackage className={className} {...props}>
      <StylePackageIdentifiers>
        <PackageInfoTuple label="id" value={pkg.id} />
        <PackageInfoTuple label="type" value={pkg.name} />
      </StylePackageIdentifiers>

      <StylePackageAttributes>
        <StylePackageInfoTupleStatus label="status" value={pkg.status} />
        <StylePackageInfoTupleStatus
          label="cost"
          value={`${pkg.cost || 0} \u20AC`}
        />
      </StylePackageAttributes>
    </StyleCardPackage>
  );
}

function PackageInfoTuple({ label, value, className, ...props }) {
  return (
    <StylePackageInfoTuple className={className} {...props}>
      <span className="key">{label}</span>
      <span className="value">{value}</span>
    </StylePackageInfoTuple>
  );
}

const StyleCardPackage = styled.article`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 450px;
  padding: 10px 15px;
`;
const StylePackageIdentifiers = styled.section`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 8px;
  padding-top: 5px;
`;
const StylePackageAttributes = styled.section`
  background-color: var(--grey-subtle);
  box-sizing: content-box;
  width: 180px;
  border-radius: var(--br-lg);
  padding: 10px 15px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: 1fr;
  justify-items: start;
  row-gap: 8px;
`;
const StylePackageInfoTuple = styled.p`
  grid-column: 1 / 2;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 5px;

  word-spacing: 0px;
  letter-spacing: 0.5px;
  font-family: Roboto-Regular;
  font-size: var(--tx-sm);
  color: var(--black-medium);

  & .key {
    font-family: Roboto-Bold;
    margin-right: 5px;
    letter-spacing: 1px;
  }

  & .key::after {
    content: ":";
  }
`;

const StylePackageInfoTupleStatus = styled(PackageInfoTuple)`
  .value {
    font-size: var(--tx-nl);
    font-family: Roboto-Bold;
    color: var(--info-medium);
  }
`;

export { CardPackage };

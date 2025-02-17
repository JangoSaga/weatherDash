import styled from "styled-components";
import MetricBoard from "./MetricBoard";
import SearchBar from "./SearchBar";
const StyledHeader = styled.h2`
  font-family: "Train One", serif;
  font-size: 2.5rem;
`;
function Header() {
  return (
    <div className="rounded-lg flex md:flex-row flex-col gap-4 justify-between p-4 border-b-1 items-center">
      <StyledHeader className="text-3xl">📺Weather App</StyledHeader>
      <div className="flex flex-row gap-2">
        <SearchBar />
        <MetricBoard />
      </div>
    </div>
  );
}

export default Header;

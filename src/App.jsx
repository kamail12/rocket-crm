import Header from './components/Header/Header';
import FullPageWrapper from './components/FullPageWrapper/FullPageWrapper';

export default function App() {
  return (
    <>
      {/* TOP NAV */}
      <FullPageWrapper>
        <Header />
      </FullPageWrapper>
      {/* Main Section */}
      <FullPageWrapper>Kolejna sekcja</FullPageWrapper>
    </>
  );
}

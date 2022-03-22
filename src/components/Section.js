import styled from "styled-components";

export const SectionHero = styled.section`
  margin: 80px auto;
`;

export const Section = styled.section`
  margin: 80px auto;
`;

/* 
export const Section = ({ id, bgOuter, bgInner, children }) => {
  return (
    <>
      <section
        className={`py-6 mb-40 sm:py-16 sm:mb-80 bg-${
          bgOuter ? bgOuter : "white"
        }`}
        id={id ? `${id}` : undefined}
      >
        <div
          className={`container w-full sm:w-3/4 rounded-lg py-10 px-6  max-w-screen-xl space-y-16`}
        >
          {children}
        </div>

      </section>
    </>
  );
};

 */
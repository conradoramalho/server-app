import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AnalyticsProps {}

const StyledAnalytics = styled.div`
  color: pink;
`;

export function Analytics(props: AnalyticsProps) {
  return (
    <StyledAnalytics>
      <h1>Welcome to Analytics!</h1>
    </StyledAnalytics>
  );
}

export default Analytics;

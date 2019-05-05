export const getRedirectPath = ({ identity }) => {
  let url = identity === "recruiter" ? "/recruiter" : "/applicant";
  return url;
};

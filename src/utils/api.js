export async function fetchResults(query) {
  const url = `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos${query}`;
  const data = await fetch(url);
  const resp = await data.json();

  if (resp.error) {
    throw new Error(resp.error);
  }

  return resp;
}

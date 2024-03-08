import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const filePromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, filePromise])
    .then((output) => {
      const profileData = output.map((result) => {
        if (result.status === 'fulfilled') {
          return result.value;
        }
        return { error: result.reason.message };
      });
      return profileData;
    });
}

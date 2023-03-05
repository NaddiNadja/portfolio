const useGetAge = () => {
  const getAge = () => {
    const today = new Date().getTime();
    const birthDate = new Date(1995, 5, 29).getTime();
    const dif = new Date(today - birthDate);
    return dif.getFullYear() - 1970;
  };

  return getAge;
};

export default useGetAge;

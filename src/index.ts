type Employee = {
  firstName: string,
  middleName?: string,
  lastName: string,
  salary: { base: number, extra: number },
}

function csv(
  {
    firstName: first,
    middleName: middle = '',
    lastName: last,
    salary: { base, extra }
  }: Employee
) {
  return `${first},${middle},${last},${base},${extra}`;
}
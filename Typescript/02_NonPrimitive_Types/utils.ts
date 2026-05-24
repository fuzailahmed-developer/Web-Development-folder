//* ------- utility

type User = {
  name: string,
  age: number
}

//* covert all property into optional
// type OptionalUser = Partial<User>

//* convert all optional properties into required
// type RequiredAllUser1Properties = Required<User>

//* convert all properties into readonly
// type ReadonlyAllUserProperties = Readonly<User>

interface OrderInfo {
  readonly id: string,
  user: string,
  city: string,
  state: string,
  country: string,
  status: string
}

//* Pick type in object
// type shippingInfo = Pick<OrderInfo, 'city' | 'state' | 'country'>

//* opposite of pick - country ku chor kr sab pick kr lega
// type shippingInfo = Omit<OrderInfo,'country'>

//* work on type - remove boolean
// type MyUnion = number | string | boolean
// type Random = Exclude<MyUnion, boolean>

//* work on type - boolean rahna du baki remove
// type MyUnion = number | string | boolean
// type Random = Extract<MyUnion, boolean>
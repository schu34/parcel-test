#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b
}

#[no_mangle]
pub fn sum(a:i32)->i32{
  let mut sum = 0;
  // for i in 1..a{
  //   sum = sum + i;
  // }

  for i in 1..a{
    for j in 1..a{
      sum = sum + i;
    }
  }
  return sum;
}
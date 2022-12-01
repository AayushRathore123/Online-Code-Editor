def solution(arr):
  maximum = 100
  
  for elem in arr:
    if elem < maximum:
      maximum = elem
  return maximum
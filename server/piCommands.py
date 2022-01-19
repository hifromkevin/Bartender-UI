import RPi.GPIO as GPIO

def turnOnPin(pin):
  GPIO.output(pin, True)
  print('PIN ON: ' + pin)

def turnOffPin(pin):
  GPIO.output(pin, False)
  print('PIN OFF: ' + pin)


def cleanUp():
  GPIO.cleanup()
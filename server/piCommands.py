import Rpi.GPIO as GPIO

def turnOnPin(pin):
  print('PIN ON: ' + pin)
  # GPIO.output(pin, True)

def turnOffPin(pin):
  print('PIN OFF: ' + pin)
  # GPIO.output(pin, False)


def cleanUp():
  GPIO.cleanup()
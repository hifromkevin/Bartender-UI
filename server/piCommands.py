import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

def turnOnPin(pin):
  GPIO.setup(pin, GPIO.OUT, initial=1)
  GPIO.output(pin, 0)
  # GPIO.output(pin, True)
  print('PIN ON: ' + pin)

def turnOffPin(pin):
  # GPIO.output(pin, False)
  GPIO.output(pin, 1)
  print('PIN OFF: ' + pin)

def cleanUp():
  GPIO.cleanup()
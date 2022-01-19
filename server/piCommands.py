import RPi.GPIO as GPIO
from threading import Timer


GPIO.setmode(GPIO.BCM)

# def turnOnPin(pin):
#   # GPIO.setup(pin, GPIO.OUT, initial=1)
#   GPIO.output(pin, 0)
#   # GPIO.output(pin, True)
#   print('PIN ON: ' + pin)

# def turnPin(pin, time): 
#   GPIO.setup(pin, GPIO.OUT, initial=1)
#   turnOnPin(pin)
#   def turnOff():
#     GPIO.output(pin, 1)
#   t = Timer(time, turnOff)
#   t.start()

# def turnOffPin(pin):
#   # GPIO.output(pin, False)
#   GPIO.output(pin, 1)
#   print('PIN OFF: ' + pin)

# def cleanUp():
#   GPIO.cleanup()

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

def turnPin(pin, time): 
  GPIO.setup(pin, GPIO.OUT, initial=1)
  turnOnPin(pin)
  def turnOff():
    GPIO.output(pin, 1)
  t = Timer(time, turnOff)
  t.start()

turnPin(26, 2.345)

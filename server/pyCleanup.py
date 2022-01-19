import RPi.GPIO as GPIO
from threading import Timer

GPIO.setmode(GPIO.BCM)

# pins = [26, 19]

# for i in pins:
#     GPIO.setup(i, GPIO.OUT, initial=1)
#     print('PIN! ' + str(i) )

# for i in pins:
#     GPIO.output(i, 0)
#     print('PIN! ' + str(i) )

# def turnOff():
#   for i in pins:
#       GPIO.output(i, 1)
#       print('PIN! ' + str(i) )

# t = Timer(2.0, turnOff)
# t.start()

# GPIO.cleanup()

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

def activatePin(pin, time): 
  GPIO.setup(pin, GPIO.OUT, initial=1)
  turnOnPin(pin)
  def turnOff():
    GPIO.output(pin, 1)
  t = Timer(time, turnOff)
  t.start()



# import RPi.GPIO as GPIO
# from threading import Timer

# GPIO.setmode(GPIO.BCM)

# pins = [26, 19]

# for i in pins:
#     GPIO.setup(i, GPIO.OUT)
#     GPIO.output(i, GPIO.HIGH)
#     print('PIN! ' + str(i) )

# def cleanUp():
#   GPIO.cleanup()

# t = Timer(2.0, cleanUp)
# t.start()

# GPIO.cleanup()





# def turnOff(pins):
#   for i in pins:
#     cleanUp(i)

# t = Timer(2.0, cleanUp, args=(26))
# t.start()
# t2 = Timer(4.0, cleanUp, args=(19))
# t2.start()

# t2 = Timer(2.0, GPIO.cleanup())
# t2.start()
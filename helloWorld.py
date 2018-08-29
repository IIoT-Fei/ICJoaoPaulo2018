import pandas as pd
import tensorflow as tf
from tensorflow import keras
import numpy as np
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' # Not compile to use AVX2 FMA warning handling

imdb = keras.datasets.imdb

(train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=10000)
#print("Training entries: {}, labels: {}".format(len(train_data), len(train_labels)))
print(train_data[1])
print(train_labels[1])


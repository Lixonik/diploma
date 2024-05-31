import sys
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.ticker import FuncFormatter

def read_data(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()
        first_fn_name = lines[0]
        second_fn_name = lines[2]
        first_fn_ops_per_second = list(map(float, lines[1].strip().split(', ')))
        second_fn_ops_per_second = list(map(float, lines[3].strip().split(', ')))
    return first_fn_name, second_fn_name, first_fn_ops_per_second, second_fn_ops_per_second

def plot_data(first_fn_name, second_fn_name,first_fn_ops_per_second, second_fn_ops_per_second, output_path):
    measurements = np.arange(len(first_fn_ops_per_second))

    # fontsize
    plt.rcParams.update({'font.size': 20})

    # plot graph
    plt.figure(figsize=(15, 10))

    plt.plot(measurements, first_fn_ops_per_second, 'b-o', label=first_fn_name, linewidth=2)
    plt.plot(measurements, second_fn_ops_per_second, 'r--o', label=second_fn_name, linewidth=2)

    plt.xlabel('Номер замера')
    plt.ylabel('Итерации в секунду')
    plt.legend()

    # beatify y formatting
    formatter = FuncFormatter(lambda x, pos: f'{int(x):,}')
    plt.gca().yaxis.set_major_formatter(formatter)

    # grid
    plt.grid(True)

    # save graph
    plt.savefig(output_path)
    plt.close()

def generate_graph(filename):
    input_filename = filename
    output_path = './pics/' + input_filename[input_filename.rfind('/'):].replace('.txt', '.png')
    print(input_filename)

    first_fn_name, second_fn_name, first_fn_ops_per_second, second_fn_ops_per_second = read_data(input_filename)
    plot_data(first_fn_name, second_fn_name, first_fn_ops_per_second, second_fn_ops_per_second, output_path)

if __name__ == "__main__":

    paths = [
          './time_series/generateMeaningfulString.txt',
          './time_series/generateNumber.txt',
          './time_series/generatePerson.txt',
          './time_series/generateString.txt',
          './time_series/generateUUID.txt'
        ]


    for path in paths:
        generate_graph(path)
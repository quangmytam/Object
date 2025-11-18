# LightPeptide-Gen: A Lightweight Graph-based Framework for De Novo Peptide Design

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![PyTorch](https://img.shields.io/badge/PyTorch-1.10+-red.svg)](https://pytorch.org/)
[![PyG](https://img.shields.io/badge/PyTorch%20Geometric-2.0+-orange.svg)](https://pytorch-geometric.readthedocs.io/en/latest/)

A lightweight, efficient framework using Graph Neural Networks (GNNs) and Graph Transformers for the *de novo* generation of novel peptide structures.

## 📖 Table of Contents

* [About The Project](#about-the-project)
* [Architecture](#architecture)
* [Key Features](#key-features)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Usage](#usage)
    * [Training](#training)
    * [Inference (Generating Peptides)](#inference-generating-peptides)
* [Roadmap](#roadmap)
* [License](#license)
* [Contact](#contact)
* [Citation](#citation)

## 🌟 About The Project

Traditional peptide discovery is a costly and time-consuming process. While deep learning has shown promise in accelerating this, many generative models are computationally heavy, making them difficult to train and deploy.

**LightPeptide-Gen** addresses this challenge by providing a framework built on lightweight Graph Neural Networks (GNNs) and optimized Graph Transformers. By representing peptides as molecular graphs, our model learns the underlying chemical and structural rules to generate novel, valid, and diverse peptide candidates efficiently.

This project focuses on optimizing the trade-off between **model size**, **inference speed**, and **generation quality**.

## 🏗️ Architecture

The core of our framework is a generative model (e.g., VAE, Autoregressive Model) that operates directly on graph-structured data.

1.  **Input Representation:** Peptides are converted from SMILES or FASTA strings into molecular graphs using `RDKit`. Each atom becomes a node (with features like atom type, charge) and each bond becomes an edge (with features like bond type).
2.  **Graph Encoder:** A stack of lightweight GNN layers (e.g., GCN, GAT) or an optimized Graph Transformer (e.g., a variant with linear attention) learns a compressed latent representation (embedding) of the molecular graph.
3.  **Generative Decoder:** A decoder (e.g., Autoregressive or VAE-based) reconstructs or "grows" a new molecular graph from a point sampled in the latent space.
4.  **Optimization Techniques:** The "lightweight" nature is achieved through:
    * **Architectural Slimming:** Using fewer layers/hidden dimensions.
    * **Optimized Blocks:** Replacing standard attention with more efficient variants.
    * **Knowledge Distillation:** (Optional) Training the small "student" model to mimic a larger "teacher" model.
    * **Quantization & Pruning:** Applying post-training optimization.

## ✨ Key Features

* **Graph-based Generation:** Natively understands molecular structure, leading to higher chemical validity.
* **Lightweight & Fast:** Designed for low-latency inference and reduced training costs.
* **Modular:** Easily swap different GNN encoders or generative decoders.
* **Extensible:** Can be adapted for conditional generation (e.g., "generate peptides with high antibacterial activity").

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
* Python (>= 3.8)
* Conda (Recommended for managing environments)
* PyTorch (>= 1.10)

Key Python libraries:
* `torch`
* `torch-geometric` (PyG)
* `rdkit-pypi`
* `numpy`
* `tqdm`

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/](https://github.com/)[YOUR_USERNAME]/LightPeptide-Gen.git
    cd LightPeptide-Gen
    ```

2.  **Create and activate a Conda environment:**
    ```sh
    conda create -n peptide_gen python=3.8
    conda activate peptide_gen
    ```

3.  **Install PyTorch:**
    *(Visit the [official PyTorch website](https://pytorch.org/get-started/locally/) for the correct command for your specific CUDA version)*
    ```sh
    # Example for CUDA 11.7
    conda install pytorch torchvision torchaudio pytorch-cuda=11.7 -c pytorch -c nvidia
    ```

4.  **Install PyTorch Geometric and RDKit:**
    ```sh
    conda install pyg -c pyg
    conda install -c conda-forge rdkit
    ```

5.  **Install other dependencies:**
    ```sh
    pip install -r requirements.txt
    ```
    *(Note: You should create a `requirements.txt` file listing all other dependencies like numpy, tqdm, etc.)*

## 🏃 Usage

### Training

1.  **Prepare your dataset:**
    Ensure your training data (e.g., a `.csv` file of peptide SMILES strings) is located in the `data/` directory.

2.  **Configure your model:**
    Modify the settings in `config/config.yaml` to define model parameters, batch size, learning rate, etc.

3.  **Run the training script:**
    ```sh
    python train.py --config config/config.yaml
    ```
    Checkpoints and logs will be saved to the `experiments/` directory.

### Inference (Generating Peptides)

Use a trained model checkpoint to generate new peptides.

```sh
python generate.py \
    --model_path experiments/[YOUR_RUN_ID]/checkpoints/best_model.pth \
    --num_to_generate 100 \
    --output_file results/generated_peptides.csv

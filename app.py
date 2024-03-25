# from flask import Flask, render_template, request, jsonify, send_from_directory
# from tensorflow.keras.models import load_model
# from sklearn.preprocessing import StandardScaler
# import numpy as np
# import os

# app = Flask(__name__)

# # Load the trained LSTM model
# lstm_model = load_model('lstm_model.h5')

# # Function to preprocess input data and make predictions
# def predict_diabetes(data):
#     # Assuming data is a numpy array with the same shape as your training data
#     data_reshaped = data.reshape((1, data.shape[0], 1))

#     # Make predictions
#     prediction = lstm_model.predict(data_reshaped)

#     # Assuming it's a binary classification, you might threshold the output
#     binary_prediction = (prediction > 0.5).astype(int)

#     return binary_prediction

# # Define routes
# @app.route('/')
# def index():
#     return send_from_directory('public', 'index.html')

# @app.route('/prediction', methods=['GET', 'POST'])
# def prediction():
#     if request.method == 'POST':
#         # Get form data from the request
#         form_data = request.form.to_dict()

#         # Convert form data to a numpy array (you need to adapt this based on your form)
#         input_data = np.array([
#             float(form_data['HighBP']),
#             float(form_data['HighChol']),
#             float(form_data['CholCheck']),
#             float(form_data['BMI']),
#             float(form_data['Smoker']),
#             float(form_data['Stroke']),
#             float(form_data['HeartDiseaseorAttack']),
#             float(form_data['PhysActivity']),
#             float(form_data['Fruits']),
#             float(form_data['Veggies']),
#             float(form_data['HvyAlcoholConsump']),
#             float(form_data['AnyHealthcare']),
#             float(form_data['NoDocbcCost']),
#             float(form_data['GenHlth']),
#             float(form_data['MentHlth']),
#             float(form_data['PhysHlth']),
#             float(form_data['DiffWalk']),
#             float(form_data['Sex']),
#             float(form_data['Age']),
#             float(form_data['Education']),
#             float(form_data['Income'])
#         ])

#         # Feature scale the variables BMI, MentHlth, and PhysHlth
#         input_data[3:6] = StandardScaler().fit_transform(input_data[3:6].reshape(-1, 1)).flatten()

#         # Make predictions
#         result = predict_diabetes(input_data)

#         return render_template('prediction.html', result=result)

#     return render_template('prediction.html', result=None)

# if __name__ == '__main__':
#     # Use os.path.dirname to get the directory of the current script
#     current_dir = os.path.dirname(os.path.abspath(__file__))
#     # Set the public directory path
#     public_dir = os.path.join(current_dir, 'public')
#     app.run(debug=True)

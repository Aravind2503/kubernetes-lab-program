docker build -t [nameof the image] .
docker push [name of the image]

command-line:

kubectl create deployment [deployment name] --image=[image name]
kubectl port-forward pod/[pod name] [port number]

to see the output
kubectl logs [podname]

yaml-file:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mynode-demo
  namespace: default
  labels:
     app: mynode-demo
spec:
  replicas: 2
  selector:
    matchLabels:
      app: mynode-demo
  template:
    metadata:
      labels:
        app: mynode-demo
    spec:
      containers:
      - name: nodeapp
        image: 18cs024/form123
---
apiVersion: v1
kind: Service
metadata:
  name: mynode-demo
  namespace: default
  labels:
     app: mynode-demo
spec:
  type: NodePort
  selector:
    # matchLabels:
      app: mynode-demo
  ports:
  - port: 3000
    targetPort: 3000
    nodePort: 30002





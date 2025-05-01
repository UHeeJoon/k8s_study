## Redis Config ##
```
redis-configmap.yaml
```

## Redis Service Headless ##
```
redis-service-headless.yaml
```

## Redis Statefulset ##
```
redis-statefulset.yaml
```

## Create Cluster ##
```
sudo kubectl exec -it -n demo redis-0 -- redis-cli --cluster create redis-0.redis-service-headless:6379 redis-1.redis-service-headless:6379 redis-2.redis-service-headless:6379 redis-3.redis-service-headless:6379 redis-4.redis-service-headless:6379 redis-5.redis-service-headless:6379 --cluster-replicas 1
```

## Conntect To Cluster ##
```
sudo kubectl exec -it -n demo redis-0 -- redis-cli -c
```

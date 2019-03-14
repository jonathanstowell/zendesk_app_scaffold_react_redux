export function resizeContainer (client, height = Number.POSITIVE_INFINITY) {
    return client.invoke('resize', { height: height });
}
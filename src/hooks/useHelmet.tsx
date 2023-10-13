import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { IHelmetProps, setHelmet } from "store/app/helmet";

const useHelmet = (props: IHelmetProps) => {
  const dispatch = useAppDispatch();
  const helmetProps = useAppSelector((state) => state.app.helmet);

  const setHelmetProps = useCallback(
    (attb: IHelmetProps) => {
        dispatch(setHelmet(attb))
    },
    [dispatch] 
  )

  useEffect(() => {
    setHelmetProps(props)
  },[dispatch, props, setHelmetProps])

  return [helmetProps, setHelmetProps]
};

export default useHelmet;

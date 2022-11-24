import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import {
  AddIconDX,
  DeleteIconDX,
  ApartmentIconDX,
} from "../../components/iconsdx";

import { useErrorContext } from "../../context/errorcontext";

import ButtonDX from "../../components/controls/buttondx";
import BoxDX from "../../components/layout/boxdx";
import DataGridDX, {
  actionMaker,
  handleDeleteClick,
} from "../../components/layout/datagriddx";
import DeleteAlert from "../../components/deletealert";

import {
  getAllMerchants,
  deleteMerchant,
} from "../../services/merchantservice";
import { Merchant } from "../../@types/merchant";

const MerchantList = () => {
  const { setError, setInfo } = useErrorContext();
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);
  const [deleteParams, setDeleteParams] = useState(-1);

  const columns: GridColumns = [
    {
      field: "merchantName",
      headerName: "Name",
      //width: "auto",
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id }) => {
        let actions = actionMaker(
          id as number,
          columns.slice(0, -1),
          "merchant"
        );

        actions.push(
          <GridActionsCellItem
            icon={<ApartmentIconDX />}
            label="Branch"
            onClick={() => navigate("/merchantbranch", { state: { id: id } })}
            color="inherit"
          />
        );

        actions.push(
          <GridActionsCellItem
            icon={<DeleteIconDX />}
            label="Delete"
            onClick={() => {
              setOpenAlert(true);
              setDeleteParams(id as number);
            }}
          />
        );

        return actions;
      },
    },
  ];

  const getPageData = () => {
    setLoading(true);
    getAllMerchants()
      .then((res) => {
        res = res?.map((e: Merchant) => Object.assign(e, { id: e.merchantID }));
        setRows(res);
        setInfo("Data Successfully recieved!");
      })
      .catch((error) => setError("Data Load Failed: " + JSON.stringify(error)))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPageData();
  }, []);

  const deleteMerchantRow = (id: number) => {
    setLoading(true);
    handleDeleteClick(id, deleteMerchant, getPageData, setInfo, setError);
    setLoading(false);
  };

  return (
    <Fragment>
      <DeleteAlert
        openAlert={openAlert}
        onOKCallback={() => {
          deleteMerchantRow(deleteParams);
          setOpenAlert(false);
        }}
        onCancelCallback={() => {
          setDeleteParams(-1);
          setOpenAlert(false);
        }}
      />
      <BoxDX>
        <Link
          to="/managemerchant"
          state={{ id: -1, columns: columns?.slice(0, -1) }}
        >
          <ButtonDX variant="outlined" startIcon={<AddIconDX />}>
            Add Merchant
          </ButtonDX>
        </Link>
        <DataGridDX rows={rows} columns={columns} loading={loading} />
      </BoxDX>
    </Fragment>
  );
};

export default MerchantList;
